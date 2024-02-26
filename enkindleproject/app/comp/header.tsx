export default function Header({value}) {
  return (
      <h1 className="text-white text-3xl bg-green-800 w-full h-1/6 flex justify-start items-end pb-3 pl-2">
        {value}
      </h1>
  )
}