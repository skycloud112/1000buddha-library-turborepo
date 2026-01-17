import bwipjs from 'bwip-js';

export async function generateBarcode(text: string): Promise<Uint8Array> {
  return bwipjs.toBuffer({
    bcid: 'code39',
    text: text,
    scale: 1,
    height: 3,
    includetext: false,
  });
}
