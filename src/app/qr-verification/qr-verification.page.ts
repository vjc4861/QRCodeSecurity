import { Component, OnInit } from '@angular/core';
import { QrGeneratorService } from '../qr-generator/qr-generator.service';
import { BarcodeFormat } from '@zxing/library';
import { AlertController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Component({
  selector: 'app-qr-verification',
  templateUrl: './qr-verification.page.html',
  styleUrls: ['./qr-verification.page.scss'],
})
export class QrVerificationPage implements OnInit {

  constructor(private qrGeneratorService: QrGeneratorService, private alertController: AlertController, private db: AngularFireDatabase) { }

  qrcodeFormat = BarcodeFormat.QR_CODE;

  ngOnInit() {
  }

  onScanSuccess(data: any) {
    // Search for the QR code content in your database
    this.db.database.ref('qrcodes').orderByChild('data').equalTo(data).once('value', async snapshot => {
      let alertHeader = '';
      let alertMessage = '';
      
      if (snapshot.exists()) {
        // If found in the database
        alertHeader = '✅ Success';
        alertMessage = `${data}<br><br>It is in our database as it was generated with our app!`;
      } else {
        // If not found in the database
        alertHeader = '❌ Warning';
        alertMessage = `${data}<br><br>It is not in our database, therefore it was not created using our app.`;
      }
  
      // Show alert message based on the result
      const alert = await this.alertController.create({
        header: alertHeader,
        message: alertMessage,
        buttons: ['OK']
      });
  
      await alert.present();
    });
  }
  


// Old working code
  // onScanSuccess(decodedText: string){
  // this.qrGeneratorService.checkIfQrCodeExists(decodedText).subscribe(isStored => {
  // // your logic to show checkmark or cross based on isStored value
  //   let header = isStored ? 'Success' : 'Info';
  //   let message = isStored ? 'QR code found and valid!' : `QR code not found or invalid. Content: ${decodedText}`;
  //   this.presentAlert(header, message);
  // });
  // }

  // async presentAlert(header: string, message: string) {
  //   const alert = await this.alertController.create({
  //     header: header,
  //     message: message,
  //     buttons: ['OK']
  //   });
  //   await alert.present();
  // }

}
