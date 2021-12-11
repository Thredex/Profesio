import React, { useContext, useState, useEffect } from 'react'

import Header from '../../../Components/Header'
import NavBar from '../../../Components/NavBar'
import styled, { ThemeProvider } from 'styled-components'
import { Context } from '../../_app'
import {
	MainHeading,
	Main,
	Box,
	Heading2,
	SubmitButton,
	Form,
	Input,
	Label,
} from '../../../theme'

const List = styled.li`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	&:last-child {
		border-bottom: none;
	}
`
const Div = styled.div`
	display: flex;
	align-items: center;
	margin-top: 0.7rem;
	width: 10rem;
`
const Container2 = styled.div`
	display: flex;
`
const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
`
const Paragraph = styled.p`
	justify-self: center;
	max-width: 15vw;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;

	padding: 0.6rem 0.1rem;
	margin: 0;
	text-align: center;
	color: ${props => props.theme.text};
	@media screen and (max-width: 1070px) and (min-width: 0) {
		&:nth-child(3) {
			display: none;
		}
	}
`
const InputContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`
const UnsortedList = styled.ul`
	height: 18rem;
	display: flex;
	flex-direction: column;
	align-items: space-evenly;
	padding-right: 2rem;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		width: 10px;
		border-radius: 20px;
	}
	&::-webkit-scrollbar-thumb {
		height: 50px;
		background-color: ${props => props.theme.color};
		border-radius: 10px;
	}
	&::-webkit-scrollbar-corner {
		background: rgba(0, 0, 0, 0);
	}
`
//delete people
const SubjectModify = () => {
	const [reload, setReload] = useState(null)
	const [subjects, setSubjects] = useState(null)

	function deleteSubject(id) {
		if (confirm('Opravdu chcete odstranit předmět?')) {
			fetch(`../../../api/school/subject/${id}`, {
				method: 'DELETE',
				headers: {
					'content-type': 'application/json',
				},
			}).then(res => {
				if (!res.ok) {
					console.log(res.status)
				}
			})
			setReload(id)
		}
	}
	function addSubject(e) {
		e.preventDefault()
		fetch('../../../api/school/subject', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				name: e.target.subject.value,
				short: e.target.subjectShort.value,
			}),
		}).then(res => {
			if (!res.ok) {
				console.log(res.status)
			} else setReload(0)
		})
	}

	useEffect(() => {
		fetch('../../../api/school/subject')
			.then(res => res.json())
			.then(data => setSubjects(data))
			.catch(err => {
				console.log(err)
			})
	}, [reload])
	console.log(subjects)
	return (
		<>
			<ThemeProvider theme={useContext(Context)}>
				<Header />
				<NavBar route="administrator" theme={useContext(Context)} />
				<MainHeading>Předměty</MainHeading>
				<Main>
					<Container>
						{!subjects || subjects[0] ? (
							<Box>
								<Heading2>Odebrání předmětu</Heading2>
								<UnsortedList>
									{subjects?.map(subject => (
										<List key={subject.id}>
											<Paragraph>{subject.name}</Paragraph>
											<Paragraph>{subject.short}</Paragraph>
											<Div>
												<SubmitButton
													value="Odstranit"
													type="submit"
													onClick={() =>
														deleteSubject(subject.id)
													}
												/>
											</Div>
										</List>
									))}
								</UnsortedList>
							</Box>
						) : null}
						<Box>
							<Heading2>Přidání předmětu</Heading2>
							<Form onSubmit={addSubject}>
								<InputContainer>
									<Container2>
										<Label htmlFor="subject">Předmět:</Label>
										<Input name="subject" id="subject" />
									</Container2>
									<Container2>
										<Label htmlFor="subjectShort">Zkratka:</Label>
										<Input name="subjectShort" id="subjectShort" />
									</Container2>
								</InputContainer>
								<SubmitButton type="submit" value="Přidat" />
							</Form>
						</Box>
					</Container>
				</Main>
			</ThemeProvider>
		</>
	)
}
export default SubjectModify
