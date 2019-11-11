
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    }
  }

  openModal = (e) => {
    this.setState({modalIsOpen: true})
  }

  handleSubmit = (e) => {
    this.handleClose();
  }

  handleClose = (e) => {
    this.setState({modalIsOpen: false})
  }

  render() {
    return (
    <div>
      <Header />
      <main>
        <div className="content-wrapper">
          <div className="primary-content">
            <h2>World conflicts. Personal stories.</h2>
            <p>
            Throughout history, millions of courageous men and women have served and protected their country in times of conflict.
            Were your ancestors among them? It’s never been easier to find out on Ancestry.com, 
            the world’s largest online collection of family history resources, including millions of military records spanning from before the Revolutionary War all the way up to Vietnam.
            </p>
            <img src="imgs/conflicts.png"></img>
            <p>
            Search through enlightening historical documents from every major U.S. war from the American Revolution through Vietnam, 
            including draft registration cards, veterans’ gravesites, soldier pension indexes, enlistment records, 
            muster rolls and much more.
            </p>
            <button className="primary-button">SEARCH ALL MILITARY RECORDS</button>
          </div>

          <aside className="secondary-content">
            <div className="featured-collections">
              <h3>
                Featured Collections
              </h3>
              <ul>
                <li>
                  <a>U.S. World War II Army Enlistment Records</a>
                </li>
                <li>
                  <a>U.S. Civil War Soldiers, 1861–1865</a>
                </li>
                <li>
                  <a>U.S. Civil War Soldiers, 1861–1865</a>
                </li>
                <li>
                  <a>WWII U.S. Navy Muster Rolls, 1938–1949</a>
                </li>
                <li>
                  <a>U.S. World War II Draft Registration Cards, 1942</a>
                </li>
                <li>
                  <a>World War I Draft Registration Cards</a>
                </li>
                <li>
                  <a>U.S. Marine Corp Muster Rolls, 1798–1958</a>
                </li>
              </ul>
              <button>SEE ALL COLLECTIONS</button>
            </div>

            <div className="discover">
              <h3>
                Let us help you discover your story
              </h3>
              <p>
                Begin your free family tree with a few simple facts. We’ll help you discover a lot more. 
                Start your tree by subscribing today for a free trial.
              </p>
              <button onClick={this.openModal}>SUBSCRIBE TODAY</button>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
      {
       (this.state.modalIsOpen) ? <Modal handleSubmit={this.handleSubmit} handleClose={this.handleClose}/> : null
      }

    </div>)
  }
}




const app = document.querySelector('#app');
ReactDOM.render(<App />, app);