// Type definitions for adilosjs 1.0
// Project: ADILOS
// Definitions by: bitsanity <https://github.com/bitsanity/ADILOS>

export function fromHexString( hexString:string ): Uint8Array;

export function toHexString( uint8arr:Uint8Array ): string;

export function parse( b64msg:string ): void;

export function agentInChallenge( chB64:string ): boolean;

export function toMessage( partsarr:Uint8Array ): Uint8Array;

export function makeChallenge( sesskey:Uint8Array ): string;

export function makeResponse( challB64:string, pvkey:Uint8Array ): string;

export function validateResponse( rspB64:string, challB64:string ): Uint8Array;

export function selfTest(): void;
