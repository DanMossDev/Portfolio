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
                    </ul><ul>
                    <li><strong>Frontend:</strong> Users can swipe to like or dislike games</li>
                    <li> When in mobile mode, interact with touch controlled card swiping</li>
                    <li> View all of their matches, and log in to store their matches</li>
                    </ul>
                </div>
                <table>
                    <tbody>
                    <tr><th colSpan="2"><h5>Technologies Used</h5></th></tr>
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
        case 'Worldle': {
            return <>
            </>
        }
        default: {
            return
        }
    }
}