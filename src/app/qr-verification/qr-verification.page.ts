import { Component, OnInit } from '@angular/core';
import { QrGeneratorService } from '../qr-generator/qr-generator.service';
import { BarcodeFormat } from '@zxing/library';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-qr-verification',
  templateUrl: './qr-verification.page.html',
  styleUrls: ['./qr-verification.page.scss'],
})
export class QrVerificationPage implements OnInit {

  constructor(private qrGeneratorService: QrGeneratorService, private alertController: AlertController) { }

  qrcodeFormat = BarcodeFormat.QR_CODE;

  ngOnInit() {
  }

  onScanSuccess(decodedText: string){
  this.qrGeneratorService.checkIfQrCodeExists(decodedText).subscribe(isStored => {
  // your logic to show checkmark or cross based on isStored value
    let header = isStored ? 'Success' : 'Info';
    let message = isStored ? 'QR code found and valid!' : `QR code not found or invalid. Content: ${decodedText}`;
    this.presentAlert(header, message);
  });
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

}
