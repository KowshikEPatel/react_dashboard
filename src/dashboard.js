
import Card from './card'

export default function Dashboard(props){
    const boardData=[
    {
      name:"Earnings(MONTHLY)",
      currency:"$",
      value:"40000",
      icon:"fa fa-calendar-o"
    },
    {
      name:"EARNINGS(YEARLY)",
      currency:"$",
      value:"40000",
      icon:"fa fa-usd"
    },
    {
      name:"TASKS",
      currency:"",
      value:"50%",
      icon:"fa fa-tasks"
    },
    {
      name:"PENDING(REQUESTS)",
      currency:"",
      value:"18",
      icon:"fa fa-comments"
    }
  ]
    return <>
            {boardData.map((obj)=>{
            return <Card title={obj.name} currency={obj.currency} value={obj.value} icon={obj.icon}></Card>
            })
            
            }
        </>
}