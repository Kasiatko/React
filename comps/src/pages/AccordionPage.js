import Accordion from "../components/Accordion"

function AccordianPage() {
    const items = [
        {
            id: "jshsh",
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want. '
        },
        {
            id: 'sg3y4bg',
            label: 'Can I use Javascript on a project?',
            content: 'You can use Javascript on any project you want. '
        },
        {
            id: "5j6j6",
            label: 'Can I use CSS on a project?',
            content: 'You can use CSS on any project you want. '
        }
    ]
  return <Accordion items={items} />
}

export default AccordianPage;