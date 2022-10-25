export default function ProjectDetails({currentProject, setCurrentProject}) {
    switch(currentProject) {
        case 'Tindie': {
            return <>
            <div className="details-box" onClick={() => setCurrentProject(null)}></div>
            <section className="details">
                <h2>{currentProject}</h2>
                <h5>"Tinder for Video Games"</h5>
                <div className="details-description">
                    <ul>
                    <li><strong>Backend:</strong> Custom web scraper interacts with the Steam API</li>
                    <li>Headless browser <a href="https://www.npmjs.com/package/puppeteer" target="_blank" rel="noreferrer">Pupeteer</a> used to collect metadata and media</li>
                    <li>REST API <a href="https://github.com/DanMossDev/Steam-Rolled" target="_blank" rel="noreferrer">Steam-Rolled</a>, utilises <em>Express and PostgreSQL</em></li>
                    <li>Built following MVC patterns and using Jest/Supertest for TDD</li>
                    </ul><ul>
                    <li><strong>Frontend:</strong> Users can swipe to like or dislike games</li>
                    <li> When in mobile mode, interact with touch controlled card swiping</li>
                    <li> View all of their matches, and log in to store their matches</li>
                    </ul>
                </div>
                <table>
                    <tbody>
                    <tr>
                        <th>Backend</th>
                        <th>Frontend</th>
                    </tr>
                    <tr>
                    <td>
                        <img src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JS logo"/>
                        <img src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg" alt="PostgreSQL logo"/>
                        <img src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="NodeJS logo"/>
                    </td>
                    <td>
                        <img src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JS logo"/>
                        <img src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5 logo"/>
                        <img src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3 logo"/>                 
                    </td></tr>
                    </tbody>
                </table>
            </section>
            </>
        }
        case 'Spot|You': {
            return <>
            <div className="details-box" onClick={() => setCurrentProject(null)}></div>
            <section className="details">
                <h2>{currentProject}</h2>
                <h5>"Transfer playlists from Spotify to YouTube Music"</h5>
                <div className="details-description">
                    <ul>
                    <li><strong>Frontend:</strong> Users log in to Spotify and Google accounts with OAuth</li>
                    <li>Can select any of their Spotify playlists and transfer them to YouTube and YouTube Music</li>
                    <li>Upon successful completion, are provided with a link to the newly created playlist</li>
                    </ul>
                    <p>Due to Google API's limitation, without being added as a test user you cannot complete a transfer.</p>
                    <a href="https://www.youtube.com/watch?v=t_o1uDLeaiE" target="_blank" rel="noreferrer">A live demo can be viewed here</a>
                </div>
                <table>
                    <tbody>
                    <tr>
                        <th>Frontend</th>
                    </tr>
                    <tr>
                    <td>
                        <img src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JS logo"/>
                        <img src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React logo"/>
                        <img src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3 logo"/>              
                    </td></tr>
                    </tbody>
                </table>
            </section>
            </>
        }
        case 'All A-Board': {
            return <>
            <div className="details-box" onClick={() => setCurrentProject(null)}></div>
            <section className="details">
                <h2>{currentProject}</h2>
                <h5>"View, vote, and comment on reviews for board games"</h5>
                <div className="details-description">
                    <ul>
                    <li><strong>Backend:</strong> RESTful API <a href="https://github.com/DanMossDev/board-game-api" target="_blank" rel="noreferrer">Bee-Gee</a>, utilises <em>Express and PostgreSQL</em></li>
                    <li>Constructed according to MVC patterns and tested using Jest and Supertest</li>
                    </ul><ul>
                    <li><strong>Frontend:</strong> Users can select an account and browse a number of reviews</li>
                    <li> React Router implemented to allow users to share links to specific sites</li>
                    <li> Custom hooks for cleaner code, media queries, optimistic rending and semantic HTML for improved UX</li>
                    </ul>
                </div>
                <table>
                    <tbody>
                    <tr>
                        <th>Backend</th>
                        <th>Frontend</th>
                    </tr>
                    <tr>
                    <td>
                        <img src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JS logo"/>
                        <img src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg" alt="PostgreSQL logo"/>
                        <img src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="NodeJS logo"/>
                    </td>
                    <td>
                        <img src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="JS logo"/>
                        <img src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3 logo"/>                 
                    </td></tr>
                    </tbody>
                </table>
            </section>
            </>
        }
        case 'Just in Time': {
            return <>
            <div className="details-box" onClick={() => setCurrentProject(null)}></div>
            <section className="details">
                <h2>{currentProject}</h2>
                <h5>"Endure the stress of working in a... legally distinct company named after a rainforest... warehouse!"</h5>
                <div className="details-description">
                    <pp>
                    Just in Time is a fun little Roguelite game where you play as the sole worker in a warehouse as customers flood in ever faster each day.
                    It can be thought of a little like Plate Up! but in a warehouse instead of a restaurant, and from a first person perspective.
                    At the end of each day, you are able to select one of two random upgrades, with some of these such upgrades being the ability to sprint,
                    crouch under shelves, jump inhumanely high, get a tablet which displays all of the waiting orders, and restock the shelves.
                    </pp><ul>
                    <strong>Skills / Design Patterns / Tools</strong>
                    <li>Finite state machines / Singletons / Observers</li>
                    <li>Custom tool for updating all fonts with a single click</li>
                    <li>Object pools with built in randomisation</li>
                    <a href="https://youtu.be/qG7T6AR38rM" target="_blank" rel="noreferrer">Watch a gameplay demo here</a>
                    </ul>
                </div>
                <table>
                    <tbody>
                    <td>
                    <img className="gametech" src="https://profilinator.rishav.dev/skills-assets/csharp-original.svg" alt="C#"/>  
                    <img className="gametech" src="https://1000logos.net/wp-content/uploads/2021/10/Unity-logo.png" alt="Unity"/>
                    </td>
                    </tbody>
                </table>
            </section>
            </>
        }
        case 'Soul Siphon': {
            return <>
            <div className="details-box" onClick={() => setCurrentProject(null)}></div>
            <section className="details">
                <h2>{currentProject}</h2>
                <h5>"Gain power by devouring your foes, but lose yourself in the process..."</h5>
                <div className="details-description">
                    <pp>
                    Soul Siphon is a 2D platformer based around the idea of a mage who can absorb others' magic powers.
                    In its current state, it is just a tech demo showing off the physics based magic abilities and the
                    magic swapping mechanics. You can pick up a "soul" at any point and absorb that power, but doing so
                    replaces the power you currently have; sort of similar to Kirby.
                    
                    </pp><ul>
                    <strong>Skills / Design Patterns / Tools</strong>
                    <li>Line renderer which accurately draws the path of outgoing projectiles</li>
                    <li>Physics based spells such as a black hole which sucks in enemies and flings the player</li>
                    <li>Use of A* and states to implement basic AI</li>
                    <li>Custom tool which creates shadow casters on a tile map</li>
                    <li>Weapon swapping with customisable stats all exposed to the editor for development</li>
                    <a href="https://youtu.be/2RTPrV8qXr8" target="_blank" rel="noreferrer">Watch a gameplay demo here</a>
                    </ul>
                </div>
                <table>
                    <tbody>
                    <td>
                    <img className="gametech" src="https://profilinator.rishav.dev/skills-assets/csharp-original.svg" alt="C#"/>  
                    <img className="gametech" src="https://1000logos.net/wp-content/uploads/2021/10/Unity-logo.png" alt="Unity"/>
                    </td>
                    </tbody>
                </table>
            </section>
            </>
        }
        default: {
            return
        }
    }
}