export function binaryToBase64(binary: Uint8Array): string {
  return btoa(chunkBinary(binary));
}

function chunkBinary(binary: Uint8Array): string {
  const CHUNK_SZ = 0x8000;
  const c: string[] = [];
  for (let i = 0; i < binary.length; i += CHUNK_SZ) {
    c.push(String.fromCharCode.apply(null, binary.subarray(i, i + CHUNK_SZ) as any));
  }
  return c.join('');
}
