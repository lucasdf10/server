
const fs = require('fs');
const qrcode = require('qrcode-generator');
const crypto = require('crypto');
var execSync = require('child_process').execSync;

var id;
var y;
var k;
var n;
var t;
var b;


module.exports = {
    async easytrackingRender(req,res) {
        res.render('easytracking');
    },
    async easytrackingPost(req,res,next){
        //let qr_txt = req.body.qr_text;
        console.log(req.body.qr_text);
        let qr_text = req.body.qr_text;  // Generate QR Code from text
        res.send(create_qrcode(qr_text));
    }
};

var create_qrcode = function(text) {
    var qr = qrcode(0, 'L');
    y = encode7BitsInfo(text);
    id = crypto.createHmac('sha256', 'easytracking')
    .update(text)
    .digest('hex');
    var redu = encode2BitsInfo(y);
    b = encode6BitsInfo(y,redu);
    var message = generateMessage(b,id,text);
    console.log(message);
    qr.addData(message);
    qr.make();
    return qr.createSvgTag({ cellSize: 4, margin: 0, xscalable: true });
    //  return qr.createImgTag();
};

var encode7BitsInfo = function(text) {
    var bits = "";
    for (var i = 0; i < text.length; i++) {
        var c = text.charCodeAt(i);
        if(c<128) {
            var byte = c.toString(2);
            if (byte.length < 7)
                byte = addPadding(byte,7);
            bits = bits + byte;
        } else {
            console.log(c + ' is NOT an ASCII character');
            return;
        }
    }

    if (bits.length % 8 != 0) {
        var padding = 8 - bits.length % 8;
        bits = bits + "0".repeat(padding);
    }
    y = bitsArray2Int(bits);
    return y;
    
    
};

var encode2BitsInfo = function(y) {
    var bits = "";
    for (var i = 0; i < y.length; i++) {
        var c = y[i];
        var byte = c.toString(2);
        byte = addPadding(byte,8);
        bits = bits + byte[0] + byte[1];
    }
    //console.log(bits.length/8);
    if (bits.length % 8 != 0) {
        var padding = 8 - bits.length % 8;
        bits = bits + "0".repeat(padding);
    }
    //console.log(bits);
    //console.log(bits.length/8);
    k = bitsArray2Int(bits);
    var redundancy = generateRedundancy(bits,k);
    var redu = bitsArray2Int(redundancy);
    createRedundancyFile(redu,k);
    return redundancy;
};

var createRedundancyFile = function(byteArray,k){
    const buf = Buffer.from(byteArray);
    fs.writeFile('./static/redu/'+ id + '.red', buf, (err) => {
        if (err) throw err;
        console.log('It\'s saved!');
    });
};

var generateRedundancy = function(bits,k){
    
    var redudancy = "";
    //console.log("k= " + k.length + "n=" + 3*k.length );
    t = k.length;
    n = 3*k.length;
    var redudancy = execSync('java -jar RS.jar ' + bits + ' ' + n + ' ' + t ).toString(); 
    var sNum = "";
    var num = 0;
    var redundancyBits = "";
    for(i=0;i<redudancy.length;i++){
        sNum = sNum + redudancy[i];
        if(sNum.length == 3){    
            num = Number(sNum);
            sNum = "";               
            var byte = num.toString(2);
            byte = addPadding(byte,8);
            //console.log("num: " + num + " bits: " + byte + "\n");
            redundancyBits = redundancyBits + byte; 
            
        }
    }   
    return redundancyBits;
};

var encode6BitsInfo = function(y,redu) {

    var bitsInfo = "";
    var count = 0;
    for (var i = 0; i < y.length; i++) {
        var c = y[i];
        var byte = c.toString(2);
        var xor1 = byte[2] ^ redu[count];
        count++; 
        var xor2 = byte[3] ^ redu[count];
        count++;
        var xor3 = byte[4] ^ redu[count];
        count++;
        var xor4 = byte[5] ^ redu[count];
        count++;
        byte = addPadding(byte,8); 
        bitsInfo = bitsInfo + xor1 + xor2 + xor3 + xor4 + byte[6] + byte[7];
    }
    //console.log(bitsInfo.length);
    if (bitsInfo.length % 8 != 0) {
        var padding = 8 - bitsInfo.length % 8;
        //console.log("padding: " + padding);
        bitsInfo = bitsInfo + "0".repeat(padding);
    }
    //console.log(bitsInfo.length);
    return bitsArray2Int(bitsInfo);
};

var bitsArray2Int = function(bits) {
    var bitCount = 0;
    var byte = "";
    var bytes = new Array();
    var byteCount = 0;
    for (var i = 0; i < bits.length; i++) {
        byte = byte + bits[i];
        bitCount++;
        //console.log(bitCount);
        if(bitCount == 8){
            bitCount = 0;
            bytes[byteCount] = bin2AsiiCode(byte);
            //console.log(bytes[byteCount]);
            byte = "";
            byteCount++;
        }
    }
    return bytes;
};

var generateMessage = function(b,id,text){
    var m = "";
    for(i=0;i<b.length;i++){
        var code = b[i];
        m = m + String.fromCharCode(code);
    }
    var bitsCount = text.length.toString(2);
    bitsCount = addPadding(bitsCount,16);
    console.log(bitsCount);
    var numBytes = bitsArray2Int(bitsCount);
    console.log(numBytes);
    var charBytes = "";
    for(i=0;i<numBytes.length;i++){
        var code = numBytes[i];
        charBytes = charBytes + String.fromCharCode(code);
    }
    console.log(charBytes.length);
    var bits = "";
    var message = charBytes + id + m;
    return message;
}

var bin2AsiiCode = function (byte) {
    return parseInt(byte, 2);
};

var addPadding = function(byte,bitsSize) {
    
    var padding = bitsSize - byte.length;
    var newByte = "0".repeat(padding) + byte;
    return newByte;
};
  