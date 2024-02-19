export default function ProjectDetails({currentProject, setCurrentProject}) {
    switch(currentProject) {
        case 'Laika: Aged Through Blood': {
            return <>
            <div className="details-box" onClick={() => setCurrentProject(null)}></div>
            <section className="details">
                <h2>{currentProject}</h2>
                <h5>"Laika: Aged Through Blood is a western-inspired motorvania set in a post-apocalyptic wasteland. 
                    It is the story about a tribe oppressed by occupant forces, and the personal story of a mother 
                    coyote warrior who descends on an endless path of vengeance to take back what her people lost."</h5>
                <div className="details-description">
                    <pp>
                    As the only programmer working full time on porting this project, I was able to successfully port the
                    game to PlayStation 4/5, Xbox One/Series, and Nintendo Switch. During the process code was built in
                    a reusable and extensible way and was used to help create a studio wide "porting toolkit" which has
                    greatly improved efficiency in creating ports.
                    </pp><ul>
                    <strong>Skills / Design Patterns / Tools</strong>
                    <li>Experience getting a project through TRCs for all modern platforms</li>
                    <li>Adaptation of HLSL shaders to work on console hardware</li>
                    <li>Creation and utilisation of a variety of tools including a platform specific texture limiter</li>
                    <li>Extensive optimisations to increase performance on limited hardware</li>
                    {/* <a href="https://youtu.be/qG7T6AR38rM" target="_blank" rel="noreferrer">Watch a gameplay demo here</a> */}
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
        case 'Pine Hearts': {
            return <>
            <div className="details-box" onClick={() => setCurrentProject(null)}></div>
            <section className="details">
                <h2>{currentProject}</h2>
                <h5>"Pine Hearts is a cosy little narrative-adventure game set in the sleepy scenery of Pine Hearts Caravan Park. 
                    Explore the great outdoors as you uncover items, unlock new paths, and discover all the little secrets 
                    stuffed throughout the Park."</h5>
                <div className="details-description">
                    <pp>
                    As well as contributions to the usual TRCs such as Switch specific handling of serialisation, user flow, etc.,
                    I was responsible for creating and implementing a package that wrapped around the Unity Input System and allowed
                    us to get gyroscope/accelerometer motion input, as well as touch screen input from the Switch. The package neatly
                    collects this input, reduces noise and applies appropriate transformations on the data to have it usable alongside
                    standard Unity code; and also provides tools for designers to be able to create "gestures" via scriptable objects.
                    </pp><ul>
                    <strong>Skills / Design Patterns / Tools</strong>
                    <li>Packagified sixaxis, touch screen and accelerometer specific input layer</li>
                    <li>Successful integration of abstracted code into a new project</li>
                    <li>Data driven design of tools for designers</li>
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
        case 'Hellboy Web of Wyrd': {
            return <>
            <div className="details-box" onClick={() => setCurrentProject(null)}></div>
            <section className="details">
                <h2>{currentProject}</h2>
                <h5>"Hellboy Web of Wyrd is a roguelike action brawler with an original story created in partnership with Dark Horse 
                    Comics and Hellboy creator Mike Mignola. When an agent of the B.P.R.D. goes missing, Hellboy is sent to investigate; 
                    pulling him into the depths of the Wyrd."</h5>
                <div className="details-description">
                    <pp>
                    Largely a supporting role, provided feedback and help with some platform specific problems. This project in particular
                    required a huge amount of optimisation to viably run on consoles at an acceptable framerate due to its intense visuals,
                    particularly post-processing.
                    <br />  
                    </pp><ul>
                    <strong>Skills / Design Patterns / Tools</strong>
                    <li>Ability to work in an extensive preexisting codebase with which I was not familiar</li>
                    <li>Substantial optimisations, particularly on the lower end hardware</li>
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
        case 'Out of Water': {
            return <>
            <div className="details-box" onClick={() => setCurrentProject(null)}></div>
            <section className="details">
                <h2>{currentProject}</h2>
                <h5>"A physics based platformer inspired by early 3D Sonic the Hedgehog games created for Game Off 2022"</h5>
                <div className="details-description">
                    <pp>
                    Out of Water is a platformer created with a few of my friends as part of GitHub's Game Off 2022 game jam.
                    I was the gameplay programmer, as well as designer and musician. As a team of three, one of the others made
                    the art/animations, and the other created an API which I interfaced with the implement leaderboards.
                    <br/>The game features a protagonist rushing to make it to school on time, utilising physics based movement to build 
                    and maintain speed, and using this speed to interact with elements in the world such as ramps and bounce pads to
                    take shortcuts. The game ends with a boss fight, and users can upload high scores.
                    </pp><ul>
                    <strong>Skills / Design Patterns / Tools</strong>
                    <li>External API / Finite state machines / Singletons</li>
                    <li>Boss enemy with built out AI using custom finite state machine</li>
                    <li>Custom physics implemented on top of rigid bodies</li>
                    {/* <a href="https://youtu.be/qG7T6AR38rM" target="_blank" rel="noreferrer">Watch a gameplay demo here</a> */}
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