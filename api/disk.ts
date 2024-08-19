import { Fetch, Method } from "./fetch";

export class Disk {
  static diskList(): Promise<any> {
    return Fetch.call("/disks");
  }

  // static rotate(angleNumber: number): Promise<any> {
  //   return Fetch.call("/rotate", Method.POST, {
  //     angle: angleNumber,
  //   });
  // }

  static pairDisk(diskId: string): Promise<any> {
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
