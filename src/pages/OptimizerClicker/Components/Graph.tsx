import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { getGraphData } from "@/lib/api";
import { useEffect, useMemo, useState } from 'react';
import Plot from "react-plotly.js";

const Graph = () => {
  const [graphData, setGraphData] = useState<Awaited<ReturnType<typeof getGraphData>>>([]);

  useEffect(() => {
    const fetchGraph = async () => {
      const data = await getGraphData();
      setGraphData(data);
    }
    fetchGraph();
  }, []);


  const dates = useMemo(() => graphData.map((data) => data.Date as string), [graphData]);

  const pseudos = useMemo(() => {
    return graphData.length === 0 ?
      [] :
      Object.keys(graphData[0]).filter((key) => key !== "Date");
  }, [graphData]);

  const graphDataGroupedByPseudo = useMemo(() => {
    const result = [];
    for (const pseudo of pseudos) {
      const values = graphData.flatMap((data) => data[pseudo] as number);
      result.push(values);
    }
    return result;
  }, [graphData, pseudos]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          Voir l'évolution du top 10
        </Button>
      </DialogTrigger>
      <DialogContent className="px-0 pb-0 max-w-6xl">
        <DialogHeader className="px-6">
          <DialogTitle className="text-primary">Evolution du top 10</DialogTitle>
        </DialogHeader>
        <div className="border-t">
          <Plot
            className="w-full"
            data={
              graphDataGroupedByPseudo.map((data, index) => {
                return {
                  x: dates,
                  y: data,
                  type: 'scatter',
                  mode: 'lines+markers',
                  visible: index < 10 ? true : "legendonly",
                  name: `Top ${index + 1} - ${pseudos.at(index)}`
                }
              })
            }
            layout={{
              title: 'Classement Clicker - Graphique intéractif',
              autosize: true,
              height: window.innerHeight * 0.8,
              xaxis: { title: 'Date' },
              yaxis: { title: 'Valeur en Trillions' }
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
};

export default Graph;
