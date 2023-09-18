import useSWR from 'swr'
export default Birds;



function Birds() {
  const {data} = useSWR("https://nuthatch.lastelm.software/v2/birds", async () => (await fetch("https://nuthatch.lastelm.software/v2/birds", {headers:{'api-key':"7f99b8d9-4f0a-4813-9f4a-1b089425f99a"}})).json(),{ suspense:true })

  return (
    <section className="container">
      {data.entities.map((bird) => {
        return (
          <div className="card" key={bird.name}>
            <div className="card-image">
              <img
                src={bird.images[0]}
                alt="Acadian Flycatcher"
              />
            </div>
            <div className="card-title">
              <h3>{bird.name}</h3>
            </div>
          </div>
        );
      })}
    </section>
  );
}
