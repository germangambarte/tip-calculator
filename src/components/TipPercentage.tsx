const tipOptions = [
  {
    id: 'tip-10',
    value: 0.1,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: 0.2,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: 0.5,
    label: '50%'
  }
]

type Props = {
  changeTip: (percentage: number) => void
  tip: number
}

export function TipPercentage({ changeTip, tip }: Props) {
  return (
    <>
      <h3 className="font-black text-2xl pt-4">
        Propina (<span className="font-black text-2xl text-red-600">*</span>):
      </h3>
      <form className="flex gap-2 py-4">
        {tipOptions.map(({ id, label, value }) => (
          <label
            key={id}
            className={`py-2 w-16 text-center border rounded-md cursor-pointer hover:bg-gray-200 ${
              tip === value ? 'bg-black text-white hover:bg-black' : ''
            }`}
          >
            <input
              type="radio"
              className="sr-only"
              name="tip"
              value={value}
              checked={tip === value}
              onChange={() => changeTip(value)}
            />{' '}
            {label}
          </label>
        ))}
      </form>
    </>
  )
}
