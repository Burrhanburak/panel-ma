export function TypographyTable() {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="even:bg-muted m-0 border-t p-0 border-zinc-800">
            <th className="border border-zinc-800 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              Management System Type
            </th>
            <th className="border border-zinc-800 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              Key Features
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-muted m-0 border-t p-0 border-zinc-800">
            <td className="border border-zinc-800 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Clinic Management
            </td>
            <td className="border border-zinc-800 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Appointments, patient records, prescriptions
            </td>
          </tr>
          <tr className="even:bg-muted m-0 border-t p-0 border-zinc-800">
            <td className="border border-zinc-800 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              HR Management
            </td>
            <td className="border border-zinc-800 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Employee tracking, shifts, attendance
            </td>
          </tr>
          <tr className="even:bg-muted m-0 border-t p-0 border-zinc-800">
            <td className="border border-zinc-800 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              School Management
            </td>
            <td className="border border-zinc-800 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Student applications, scholarship tracking
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

