interface ExceptionWordProps {
	text: string;
}

export default function ExceptionWord({ text }: ExceptionWordProps) {
	return (
		<div className="flex justify-center items-center h-full p-12 xl:col-span-2">
			<span className="text-gray-500">{text}</span>
		</div>
	);
}
