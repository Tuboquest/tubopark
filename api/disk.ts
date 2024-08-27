import { Fetch, Method } from "./fetch";

export class Disk {
  static diskList(): Promise<any> {
    return Fetch.call("/disks");
  }

  static rotate(angleNumber: number): Promise<any> {
    return Fetch.call("/c/rotate", Method.POST, {
      angle: String(angleNumber),
    });
  }

  static pairDisk(diskId: string): Promise<any> {
    console.log("pairing disk");
    return Fetch.call("/disks/" + diskId + "/pair", Method.POST, {
      diskId: diskId,
    });
  }

  static unpairDisk(token: string, diskId: string): Promise<any> {
    return Fetch.call("/disks/" + diskId + "/unpair", Method.POST, {
      diskId: diskId,
    });
  }
}
