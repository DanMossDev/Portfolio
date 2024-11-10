export default function ProjectDetails({currentProject, setCurrentProject}) {
    switch(currentProject) {
        case 'The Precinct': {
            return <>
            <div className="details-box" onClick={() => setCurrentProject(null)}></div>
            <section className="details">
                <h2>{currentProject}</h2>
                <h5>"Averno City, 1983. Gangs rule the streets and your father lies restless in his grave. Clean up the city,
                    uncover the truth, and embark on thrilling vehicle chases through destructible environments in this neon-noir
                    action sandbox police game."</h5>
                <div className="details-description">
                    <pp>
                    After being brought on by the guys at Fallen Tree Games and Kwalee, I immediately jumped into the existing
                    codebase and started fixing bugs and completing tasks from day one. I predominantly focused my attentions on
                    animation and gameplay programming though as a systems heavy game I was also involved in programming for the
                    AI, vehicles, physics, graphics and more.
                    </pp><ul>
                    <strong>Skills / Design Patterns / Tools</strong>
                    <li>Focus on animation programming, extensive use of StateMachineBehaviours and inverse kinematics</li>
                    <li>Experience diving into an extensive codebase following different standards/patterns than I had used before</li>
                    <li>Constant communication with clients to ensure their design is being brought to life how they imagined it</li>
                    <li>Assistance with demos for Steam Next Fest and ports to Xbox Series and PlayStation 5</li>
                    </ul>
                </div>
            </section>
            </>
        }
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
                    As the porting programmer for this project, I was able to successfully bring the game to PlayStation 4/5, 
                    Xbox One/Series, and Nintendo Switch. During the process code was built in a reusable and extensible way 
                    and was used to help create a studio wide "porting toolkit" which has greatly improved efficiency in creating ports.
                    </pp><ul>
                    <strong>Skills / Design Patterns / Tools</strong>
                    <li>Successful initial TRC passes for each platform, as well as multiple patches</li>
                    <li>Adaptation of HLSL shaders and a custom SRP renderer setup to work on console hardware</li>
                    <li>Creation and utilisation of a variety of tools including texture limiter</li>
                    <li>Huge number of code and asset optimisations to increase performance - especially in reducing memory footprint</li>
                    </ul>
                </div>
            </section>
            </>
        }
        case 'RadRabbit': {
            return <>
            <div className="details-box" onClick={() => setCurrentProject(null)}></div>
            <section className="details">
                <h2>{currentProject}</h2>
                <h5>"Make Your Bunny Happy & Healthy—One Bite at a Time!
                Meet RadRabbit — your adorable new bunny friend who’s here to help you eat more fruits and veggies! 
                Every day, your bunny starts off feeling a bit sad, but with your help, it can become the happiest, 
                healthiest rabbit around! How? By logging the fruits and vegetables you eat throughout the day!"</h5>
                <div className="details-description">
                    <pp>
                    Working alongside our UI/UX lead and client Habitable Earth to bring this charming little app to life was a pleasure.
                    Initially it was intended to just be a prototype, but thanks to the quick turnaround and high level of
                    quality provided, after a few rounds of feedback the client released into a private beta before deciding
                    the send the app live permanently.
                    </pp><ul>
                    <strong>Skills / Design Patterns / Tools</strong>
                    <li>UI heavy mobile design, fully responsive and works on all screen sizes</li>
                    <li>Custom intelligent database search for logging daily fruit/veg inputs</li>
                    <li>Analytics, notifications, touch input, high focus on user experience</li>
                    </ul>
                </div>
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
            </section>
            </>
        }
        case 'Prototypes': {
            return <>
            <div className="details-box" onClick={() => setCurrentProject(null)}></div>
            <section className="details">
                <h2>{currentProject}</h2>
                <h5>Well recieved publisher pitches with a variety of genres and technical requirements, 
                    from procedurally generated fifty player live service games to intensely difficult
                    hand crafted single player metroidvanias.
                </h5>
                <div className="details-description">
                    <pp>
                    Working alongside a folks at Hyper Luminal Games, we crafted a number of amazing prototypes 
                    and pitch decks which have resulted in ongoing follow ups and negotiations with several 
                    publishers about continued development and potential releases in the next few years.
                    </pp><ul>
                    <strong>Skills / Design Patterns / Tools</strong>
                    <li>Massively multiplayer (50 concurrent players) real time networked PVP/PVE game</li>
                    <li>IP based Metroidvania with custom physics system to allow for intricate gravity manipulation</li>
                    <li>Shader programming to help get early visual fidelity without losing the "prototype" feel</li>
                    <li>Involvement in pitch meetings with worldwide publishers</li>
                    </ul>
                </div>
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
                    </ul>
                </div>
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

            </section>
            </>
        }
        default: {
            return
        }
    }
}