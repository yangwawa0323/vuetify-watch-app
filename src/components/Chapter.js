import videojs from "video.js"

// Use static method get base class 'Component'
const Component = videojs.getComponent("Component");


// Extends from Component
export default class Chapter extends Component {
	constructor(player, options) {
		// Initialize super class Component
		super(player, options)
		// this.player = player
		// console.log('Chapter component constructor this.player: ', this.player)
		this.addChapterComponent(player)
	}

	// Create the Element
	createEl() {
		let overlay = videojs.dom.createEl('div',
			{
				// Specified the new component style class by 
				// according the named principle with 'vjs-' prefix.
				className: "vjs-chapter-overlay",
				tabIndex: -1
			});

		// Inner Content == InnerText
		videojs.dom.insertContent(overlay, "章节")

		// Custom events
		overlay.addEventListener('click', () => {
			console.log('章节')
		})

		// this.addChapterComponent()
		return overlay
	}


	addChapterComponent(player) {
		//   let chapter = new Chapter(this.player)

		const chapterOptions = {};
		// this.player() => Player Component
		const controlBar = player.getChild('ControlBar');
		const pictureInPictureToggle = controlBar.getChild('PictureInPictureToggle');
		//   console.log('picture in picture: ', pictureInPictureToggle);
		const pipIndex = controlBar.children().indexOf(pictureInPictureToggle)
		console.log('pipIndex: ', pipIndex)
		controlBar.addChild(this, chapterOptions, pipIndex)
	}
}


// Finally, register compont to videojs player
Component.registerComponent("Chapter", Chapter)



/* The sample of css */

// .vjs-chapter-overlay {
//   margin: auto;
//   background: gray;
//   width: 3rem;
//   border-radius: 12px;
//   height: 80%;
//   display: flex;
//   opacity: 0.5;
//   justify-content: center;
//   align-items: center;
//   transition: all .5s ease-in-out;

// }

// .vjs-chapter-overlay:hover{
//   opacity: 1;
//   font-size: .72rem;
//   font-weight: 500;
//   color: yellow;
// }