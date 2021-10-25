import videojs from "video.js"

// Use static method get base class 'Component'
const Component = videojs.getComponent("Component");



// Extends from Component
export default class Chapter extends Component {
	constructor(player, options, callbackFunc, ...callbackArgs) {
		// Initialize super class Component
		super(player, options)

		// save callbackFunc to global variables
		// Note: createEl return a new object, `this` has been replaced
		// You have to use global variable to keep constructor variables
		if (callbackFunc && typeof callbackFunc === "function") {
			this.callbackFunc = callbackFunc
			this.callbackArgs = callbackArgs
		}

		/** 
		* IMPORTANT: `this` has not addEventListener method, if you
		* want bind the events use `on` function
		*/
		this.clickEvent()


		this.addChapterComponent(player)
	}

	// Create the Element
	// Note: CANNOT bind event in this function, in the constructor
	// is the right way.
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

		return overlay
	}
	
	clickEvent() {
		let _this = this;
		let action = new Promise((resolve, reject) => {
			if (this.callbackFunc && typeof this.callbackFunc === "function") {
				/** 
				* IMPORTANT: `this` has not addEventListener method, if you
				* want bind the events use `on` function
				*/
				 _this.on('click',async () => {
					// 	// resolve(console.log('Click'));
					await resolve(_this.callbackFunc.apply(_this, _this.callbackArgs))
				})
			} else {
				reject(
					new Error("You should defined the callback function to retrieve the data")
				)
			}
		})
		return action
	}

	addChapterComponent(player) {
		//   let chapter = new Chapter(this.player)

		const chapterOptions = {};
		// this.player() => Player Component
		const controlBar = player.getChild('ControlBar');
		// Due to Firefox has floating PictureInPictureToggle which is not be a child
		// of controlBar, We change the chapter component before the FullscreenToggle
		// in case of compatible of both Firefox and Chrome.
		const fullscreen = controlBar.getChild('FullscreenToggle');
		//   console.log('picture in picture: ', pictureInPictureToggle);
		const fsIndex = controlBar.children().indexOf(fullscreen)
		console.log('pipIndex: ', fsIndex)
		if (fsIndex !== -1) {
			controlBar.addChild(this, chapterOptions, fsIndex)
		}
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