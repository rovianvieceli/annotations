const app = new Vue({
	el: '#app',
	data: {
		title: 'Annotations',
		note: {
			title: '',
			text: '',
		},
		notes: [{
			title: 'Vista ao Hawaii',
			text: 'Eu adorei as praias e as deliciosas águas de cocos frescas. ',
			date: new Date(Date.now()).toLocaleString()
		}],
	},
	methods: {
		addNote() {
			let { text, title } = this.note

			this.notes.push({
				text,
				title,
				date: new Date(Date.now()).toLocaleString()
			})
		},

		removeNote(index) {
			this.notes.splice(index, 1)
		}
	}
})
