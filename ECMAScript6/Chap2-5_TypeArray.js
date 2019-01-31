const buffer = new ArrayBuffer(16); // 16바이트 버퍼
console.log(buffer.byteLength);

const uint32Array = new Uint32Array(buffer); // Uint32는 4바이트이기 때문에 16바이트를 사용하여 배열을 만들경우 4개로 나뉜다.
console.log(uint32Array);