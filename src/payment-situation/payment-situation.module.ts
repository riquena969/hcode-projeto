import { Module } from '@nestjs/common';
import { PaymentSituationService } from './payment-situation.service';
import { PaymentSituationController } from './payment-situation.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/user/user.module';
import { AuthModule } from 'src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: Number(process.env.JWT_EXPIRE),
        },
      }),
    }),
  ],
  controllers: [PaymentSituationController],
  providers: [PaymentSituationService],
})
export class PaymentSituationModule {}
