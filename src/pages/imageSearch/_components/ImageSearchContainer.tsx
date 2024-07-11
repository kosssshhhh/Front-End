export default function ImageSearchContainer({ children }: { children: React.ReactNode }) {
	return (
		<div className="pt-6 px-4">
			<div className="w-full grid grid-cols-1 gap-4">{children}</div>
		</div>
	);
}
