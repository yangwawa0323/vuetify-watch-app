import videojs from "video.js"

const Component = videojs.getComponent("Component");

export default class Chapter extends Component {
	constructor(player, options) {
		super(player, options)

	}

	createEl() {
		let overlay = videojs.dom.createEl('div',
			{
				className: "vjs-chapter-overlay",
				tabIndex: -1
			});
		videojs.dom.insertContent(overlay, "章节")
		overlay.addEventListener('click', () => {
			console.log('章节')
		})
		return overlay
	}
}

Component.registerComponent("Chapter", Chapter)