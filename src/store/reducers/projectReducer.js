const initState = {
	projects: [
		{id: '1', title: 'first project title', content: 'first project content'},
		{id: '2', title: 'second project title', content: 'second project content'},
		{id: '3', title: 'third project title', content: 'third project content'}
	]
}

const projectReducer = (state = initState, action) => {
	return state;
}

export default projectReducer