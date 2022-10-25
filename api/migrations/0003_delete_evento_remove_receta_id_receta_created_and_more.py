# Generated by Django 4.1 on 2022-09-07 16:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_producto_medidas'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Evento',
        ),
        migrations.RemoveField(
            model_name='receta',
            name='id',
        ),
        migrations.AddField(
            model_name='receta',
            name='created',
            field=models.DateTimeField(auto_now_add=True, default='2000-10-10 20:10'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='producto',
            name='categoria',
            field=models.CharField(choices=[('Productos', 'Productos'), ('Combos', 'Combos'), ('Bazar premium', 'Bazar premium'), ('Complementos', 'Complementos')], default='Productos', max_length=20),
        ),
        migrations.AlterField(
            model_name='receta',
            name='nombre',
            field=models.CharField(max_length=50, primary_key=True, serialize=False),
        ),
    ]
