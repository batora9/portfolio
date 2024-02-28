export default function Page({ params }: { params: { year: string } }) {
    return <div>My Post: {params.year}</div>
}