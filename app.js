const parent = React.createElement("div",{id:"parent",},[React.createElement("div",{id:"child"},[React.createElement("h1",{id:"heading"},"Welcome to React"),React.createElement("h3",{id:"heading"},"Namaste react")]),React.createElement("div",{id:"child-1"},[React.createElement("h1",{id:"heading"},"Welcome to React-1"),React.createElement("h3",{id:"heading"},"Namaste react-1")])])
// const header = React.createElement("h1",{id:"heading"},"Namaste Sanjay !!")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)


console.log(parent);