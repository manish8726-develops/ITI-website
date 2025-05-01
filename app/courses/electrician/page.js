import React from 'react'

const page = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6">General Information</h2>
      <table className="w-full table-auto border border-gray-200">
        <tbody>
          <tr className="bg-white border border-gray-200">
            <td className="px-4 py-3 font-medium w-1/12">1.</td>
            <td className="px-4 py-3 font-medium w-1/3">Entry Qualification</td>
            <td className="px-4 py-3">
              Passed 10th class Examination under 10+2, With Math and science
              its or equivalent.
            </td>
          </tr>
          <tr className="bg-gray-50 border border-gray-200">
            <td className="px-4 py-3 font-medium">2.</td>
            <td className="px-4 py-3 font-medium">Duration - Electrician Training</td>
            <td className="px-4 py-3">2 yrs</td>
          </tr>
          <tr className="bg-white border border-gray-200">
            <td className="px-4 py-3 font-medium">3.</td>
            <td className="px-4 py-3 font-medium">Duration - Apprenticeship Training</td>
            <td className="px-4 py-3">1 yr</td>
          </tr>
        </tbody>
      </table>
      <div className='pt-10'>
      <h2 className="text-3xl font-semibold mb-6">Skill Aquired/Developed</h2>
      <p className='text-sm para'>
      On completion of the course the trainee shall have though knowledge of generation, transmission and distribution line, overhead different types of insulator, different types of wire, knowledge of different types of wire gauge. Earthing used in substation, power station and different types of capacitor in AC/DC circuit used in electronic and electrical installation in industries. Construction of different types of batteries and electro types used in it, he shall able to prepare and repair batteries in workshop. Servicing and repairing of table fan, celling fan, exhaust fan, grinder, water pumps, washing machine, room heater, AC.DC generator, transformer, knowledge of single phase and three phase induction motor, starter, winding of motor and relay used in AC/DC circuit. Practice of soldering on printed circuit board working on the circuit design prepare HT/CT panel used for Industries/workshop. Defect fault in different types of AC and DC starter and motor timer used in factories and workshop and take up maintenance of machinery, milling machine, capson CNC lathe machine, connect different types of measuring instrument on the panel boards. Winding of transformer field coil of DC motors and AC motors rewinding of armature starter winding, bell/buzzer/NVC of DC starter. To make and fabricate the different types of Electronics circuit as Disco light, water level indicator, musical bell, buzzer, to glow the fuse tube light etc. In this institute told repair the radio television and other electronics circuit also.
      </p>
      </div>
      <div className='pt-10'>
      <h2 className="text-3xl font-semibold mb-6">Option of Employment</h2>
      <p className='text-sm para'>
      Can work as a Central Govt., State govt. and Private Industries, Institution, as a lineman/ wireman/ maintenance/ electrician electrical supervisor/ electrical contractor/ service technician/ expert re-winder/ make electronic circuit/ tab technician/ electrical maintenance/ Railways Pilot and maintenance work.
      </p>
      </div>
      <div className='pt-10'>
      <h2 className="text-3xl font-semibold mb-6">Self Employments</h2>
      <p className='text-sm para'>
      A Electrician can start a contractor of domestic wiring and Industrial wiring and disco lighting in five star hotels. He shall be able to run his own electrical workshop and take up oil filtration of transformer on lines, Set up own shop for rewinding of different types af AC?DC motors, generator & transformer, panel board wiring, bus bar wiring and measuring instruments wiring.

The electrician supervisor and is responsible for all other electrician can pull the permit with the electrical authority and can only be registered with one electrical contracting company at any one time.

Electrician may be employed in the installation of new electrical components of the maintenance and repair of existing electrical infrastructure. Electrician are typically not allowed to perform work for the public unless under the employment of an electrical contractor
      </p>
      </div>
    </div>
  )
}

export default page
