import * as NiVisa from './node-ni-visa';

// Initialization NI-VISA driver
const driverSession = NiVisa.viOpenDefaultRM()

// Open USB device communication session
const deviceSession = NiVisa.viOpen(driverSession, 'USB0::0x0957::0x5407::MY59002374::0::INSTR')

// Write and read by SCPI
console.log('Write result:', NiVisa.viWrite(deviceSession, "SYST:ERR\n"));
console.log('Write result:', NiVisa.viWrite(deviceSession, "*IDN?\n"));
console.log('Read result:', NiVisa.viRead(deviceSession));

// Query by SCPI
const queryMessage = '*IDN?\n'
console.log(`Query '${queryMessage}' -> '${NiVisa.query(deviceSession, queryMessage)}'`)

// Close device communication session
NiVisa.viClose(deviceSession)

// Close NI-VISA driver
NiVisa.viClose(driverSession)
