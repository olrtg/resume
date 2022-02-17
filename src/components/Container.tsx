interface Props {
  children: React.ReactNode
}

const Container = ({ children }: Props) =>
  <div className="lg:p-8 p-6">{children}</div>

export default Container

