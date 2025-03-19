import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Page({
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Table>
      <TableCaption>Lista de recibos</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Recibos</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Metodo</TableHead>
          <TableHead >Quantia</TableHead>
          <TableHead >NF</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">NF001</TableCell>
          <TableCell className="text-green-900">Pago</TableCell>
          <TableCell>Cartão de Crédito</TableCell>

          <TableCell >R$250.00</TableCell>
          <TableCell>
            <a href="/dummy.pdf" 
            download 
            className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200 inline-block">
              Recibo
              </a>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table >
  );
}
