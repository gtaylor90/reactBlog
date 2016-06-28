const React = require('react'),
	ReactDOM = require('react-dom')

const app = function() {

	const Header = React.createClass({
		render: () => {
			return (
	<div id="container">
        <div id="sky">
            <img src="http://magentanova.github.io/html-intro-1/images/houston.jpg" alt="none" />
            <div id="logo">
            </div>
        </div>
        <div id="column">
            <div id="lcol">
                <h1>The Iron Yard | Houston</h1>
                <p> Happenings and updates from The Iron Yard in Houston, TX</p>
                <h2>SEARCH</h2>
                <form>
                    <input type="text" placeholder="search" />
                </form>
            </div>
            <div id="rcol">
                <h1>September 22 Stars a New Class of The Iron Yard Houston Students</h1>
                <img src="http://magentanova.github.io/html-intro-1/images/classroom.jpg" alt="" />
            </div>
        </div>
        <div id="social">
        </div>
    </div>
    )
		}
	})

	ReactDOM.render(<Header/>,document.querySelector('.container'))
}

app()