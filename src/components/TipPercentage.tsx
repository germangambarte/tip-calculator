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
      <h3 className="font-black text-2xl">
        Propina (<span className="font-black text-2xl text-red-600">*</span>):
      </h3>
      <form>
        {tipOptions.map(({ id, label, value }) => (
          <label key={id} className="block">
            <input
              type="radio"
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
