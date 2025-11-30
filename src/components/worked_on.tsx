import React from "react";
import '../assets/styles/Worked_on.scss';

function Workedon() {
    return(
    <div className="workedon-container" id="Workedon">
        <h1>Worked On</h1>
        <div className="workedon-grid">
            <div className="workedon zoom">
                <h2>Input Sensors</h2>
                <p>Temperature and Humidity Sensor <b>(DHT11/DHT22)</b></p>
                <p>Pressure Sensor <b>(HX 710b)</b></p>
                <p>Gas Sensor <b>(MQ5)</b></p>
                <p>Motion Sensor <b>(HC SR501)</b></p>
                <p>Distance Sensor</p>
                <p>Light Sensor <b>(LDR)</b></p>
                <p>Accelerometer and Gyroscope <b>(MPU 6050)</b></p>
                <p>Soil Moisture Sensor</p>
                <p>IR Sensor</p>
                <p>RFID <b>(RC522)</b></p>
                <p>CCTV Camera<b>(Ethernet)</b></p>
                <p>GPS<b>(Neo 6m)</b></p>
                <p>A9G Board</p>
                <p>Lidar x2</p>
            </div>
            <div className="workedon zoom">
                <h2>Output Components</h2>
                <p>Lcd Display <b>(16x2,16x4)</b></p>
                <p>OLED Display <b>(ssd1306)</b></p>
                <p>Speakers</p>
                <p>Servo Motor <b>(MG90,M995/6)</b></p>
                <p>DC/Stepper Motor <b>(Johnson,BO,Planetary)</b></p>
                <p>Speaker<b>(Ethernet)</b></p>
                {/* <p>LED Display<b>(P3 64x64)</b></p> */}
            </div>
            <div className="workedon zoom">
                <h2>Controllers</h2>
                <p>Arduino Uno</p>
                <p>Esp</p>
                <p>Raspberry Pi</p>
                <p>8051/8086</p>
                <p>Gateway</p>
                <p>Jetson Nano 2gb</p>
            </div>
            <div className="workedon zoom">
                <h2>Protocols</h2>
                <p>Hypertext Transfer Protocol <b>(HTTP)</b></p>
                <p>Wireless Fidelity <b>(WIFI)</b></p>
                <p>Bluetooth<b>(BLE)</b></p>
                <p>Inter-Integrated Circuits <b>(I2C)</b></p>
                <p>Universal Asynchronous Receiver/Transmitter <b>(UART)</b></p>
                <p>Serial Peripheral Interface <b>(SPI)</b></p>
                <p>Radio-Frequency IDentification <b>(RFID)</b></p>
                {/* <p>Radio Frequency <b>(RF)</b></p> */}
            </div>
        </div>
    </div>
    );
}

export default Workedon;