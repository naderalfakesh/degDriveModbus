// create an empty modbus client
var ModbusRTU = require("modbus-serial");
var client = new ModbusRTU();
 
// open connection to a serial port
client.connectRTUBuffered("/dev/ttyUSB0", { baudRate: 9600 }, write);
 
function write() {
    client.setID(1);
    // read();
    // write the values 0, 0xffff to registers starting at address 5
    // on device number 1.
    client.writeRegister(0x2001,2323)
        .then(read);
    // client.writeRegisters(0x2000,[1,2323])
    //     .then(read);
}
 
function read() {
    // read the 2 registers starting at address 5
    // on device number 1.
    client.readHoldingRegisters(0x2101, 1)
        .then(console.log);
}