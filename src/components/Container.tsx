interface Props {
  children: React.ReactNode
}

const Container = ({ children }: Props) =>
  <div className="p-8">{children}</div>

export default Container