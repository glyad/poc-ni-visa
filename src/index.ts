import * as NiVisa from './node-ni-visa';

// Initialization NI-VISA driver
const driverSession = NiVisa.viOpenDefaultRM();

// Open USB device communication session
//
// Scope - USB0::0x0699::0x03C7::C023503::INSTR, USB0::0x0699::0x03C7::C024750::INSTR
//const scopeDeviceSession = NiVisa.viOpen(driverSession, 'USB0::0x0699::0x03C7::C023503::INSTR');

// Generator - USB0::0x0957::0x0407::MY59002371::0::INSTR
const generatorDeviceSession = NiVisa.viOpen(driverSession, 'TCPIP0::127.0.0.1::5026::SOCKET');

// Scope: Write and read by SCPI 

// console.log('Write result:', NiVisa.viWrite(scopeDeviceSession, "*IDN?\n"));
// console.log('Read result:', NiVisa.viRead(scopeDeviceSession));
// console.log('Write result:', NiVisa.viWrite(scopeDeviceSession, "FPAnel:PRESS ZOOM\n"));
// console.log('Write result:', NiVisa.viWrite(scopeDeviceSession, "SYST:ERR\n"));
// Query by SCPI
const queryMessage = '*IDN?'
//console.log(`Query '${queryMessage}' -> '${NiVisa.query(scopeDeviceSession, queryMessage)}'`)

// Close device communication session
// NiVisa.viClose(scopeDeviceSession)

// Scope: Write and read by SCPI 

// console.log('Write result:', NiVisa.viWrite(generatorDeviceSession, "*IDN?\n"));
// console.log('Read result:', NiVisa.viRead(generatorDeviceSession));
// console.log('Write result:', NiVisa.viWrite(generatorDeviceSession, "*IDN?\n"));
// console.log('SYST:ERR result:', NiVisa.viWrite(generatorDeviceSession, "SYST:ERR\n"));
// Query by SCPI
let res;

try {
    res = NiVisa.query(generatorDeviceSession, "*IDN?");
} catch (error) {
    console.error('Error:', error);
} finally {
    console.log(`Query '*IDN?' -> '${res}'`);
}
//console.log(`Query '${queryMessage}' -> '${NiVisa.query(generatorDeviceSession, queryMessage)}'`)

// Close device communication sessions
// NiVisa.viClose(scopeDeviceSession)
NiVisa.viClose(generatorDeviceSession)

// Close NI-VISA driver
NiVisa.viClose(driverSession)
