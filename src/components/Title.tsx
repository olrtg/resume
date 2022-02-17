interface Props {
  children: React.ReactNode
}

const Title = ({ children }: Props) =>
  <h2 className="mb-2 font-semibold tracking-wider text-green-800 uppercase">{children}</h2>

export default Title