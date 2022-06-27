const tabs = [...document.querySelectorAll(".tab")];
console.log(tabs);

tabs.forEach(tab => tab.onclick = Noeud);

function Noeud(event){
  const tabContents = [...document.querySelectorAll(".tab-content")];

  const IndexToRemove = tabs.findIndex(tab =>
    tab.classList.contains("active-tab")
  );

  
  tabs[IndexToRemove].classList.remove("active-tab");
  tabContents[IndexToRemove].classList.remove('active-tab-content');

  const IndexToShow = tabs.indexOf(event.target)

  console.log(IndexToShow);

  tabs[IndexToShow].classList.add("active-tab");
  tabContents[IndexToShow].classList.add('active-tab-content');
}
