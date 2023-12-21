import profileImage from './assets/avatar.png'

// User data
const user = {
	name: 'Jessy Styles',
	avatarUrl: profileImage,
	registerDate: '10/31/2023',
	bio: 'Jessy is passionate about designing visually stunning and highly functional web applications, with code. She really enjoys using Tailwind.',
}

export default function UserProfile() {
	return (
		<div className="pb-20 pt-48">
			<div className="mx-auto max-w-md rounded-3xl bg-slate-100 px-8 text-center">
				<header className="flex flex-col items-center">
					<img
						src={user.avatarUrl}
						alt={`avatar for ${user.name}`}
						className="-mt-20 h-40 w-40 rounded-full object-cover"
					/>
					{/* 🐨 
            1. Increase the margin top to level 8
            2. Make the font size 3xl and the font weight 400
          */}
					<h1 className="mt-1 text-5xl font-extrabold text-slate-900">
						{user.name}
					</h1>
					{/* 🐨 Make the text color slate-500 */}
					<p className="mt-2 text-slate-900">Joined on {user.registerDate}</p>
				</header>
				{/* 🐨 
          1. Increase the margin top to level 8
          2. Increase the horizontal padding to level 8
          3. Make the font size lg
        */}
				<p className="mt-2 text-xl text-slate-900">{user.bio}</p>
				<footer className="py-16">
					<a
						href="#"
						className="ring-ring inline-flex h-10 items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white outline-none ring-offset-2 ring-offset-white transition-colors focus-within:ring-4 hover:bg-slate-900/80 focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50"
					>
						Read notes
					</a>
				</footer>
			</div>
		</div>
	)
}
