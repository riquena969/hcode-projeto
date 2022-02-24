import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePaymentSituationDto } from './dto/create-payment-situation.dto';
import { UpdatePaymentSituationDto } from './dto/update-payment-situation.dto';

@Injectable()
export class PaymentSituationService {
  constructor(private prismaService: PrismaService) {}

  validInputedData(inputedData: any) {
    if (!inputedData.name) {
      throw new BadRequestException('Name is required');
    }
    if (!inputedData.description) {
      throw new BadRequestException('Description is required');
    }
    if (!inputedData.price) {
      throw new BadRequestException('Price is required');
    }
  }

  async create(createPaymentSituationDto: CreatePaymentSituationDto) {
    this.validInputedData(createPaymentSituationDto);

    return this.prismaService.payment_situations.create({
      data: createPaymentSituationDto,
    });
  }

  async findAll() {
    return this.prismaService.payment_situations.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.payment_situations.findFirst({ where: { id } });
  }

  async update(
    id: number,
    updatePaymentSituationDto: UpdatePaymentSituationDto,
  ) {
    this.validInputedData(updatePaymentSituationDto);

    return this.prismaService.payment_situations.update({
      data: updatePaymentSituationDto,
      where: { id },
    });
  }

  async remove(id: number) {
    return this.prismaService.payment_situations.delete({ where: { id } });
  }
}
