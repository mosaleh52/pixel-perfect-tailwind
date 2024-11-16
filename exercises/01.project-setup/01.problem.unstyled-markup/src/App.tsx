import { EpicStackLogo } from './logos/epic-stack'
import { logos } from './logos/logos'
export default function App() {
	return (
		<>
			<p>Let's build something epic!</p>
			<EpicStackLogo className="size-20" />
			<h1>epic stack</h1>

			<p>
				Check the <a href="#">Getting Started </a> guide file for how to get
				your project off the ground!
			</p>
			<ul>
				{logos.map((logo) => (
					<li key={logo.href}>
						<a href={logo.href}>
							<img className="w-16" src={logo.src} alt={logo.alt} />
						</a>
					</li>
				))}
			</ul>
		</>
	)
}
