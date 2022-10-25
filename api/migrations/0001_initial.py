# Generated by Django 4.0.5 on 2022-07-15 02:41

from django.db import migrations, models
import django.db.models.deletion
import tinymce.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Evento',
            fields=[
                ('nombre', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('fecha', models.DateField()),
                ('descripcion', tinymce.models.HTMLField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('nombre', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('descripcion', tinymce.models.HTMLField(null=True)),
                ('atributos', tinymce.models.HTMLField(null=True)),
                ('imagen', models.ImageField(blank=True, null=True, upload_to='Productos')),
                ('medidas', models.ImageField(blank=True, null=True, upload_to='Medidas')),
                ('categoria', models.CharField(choices=[('Línea contemporánea', 'Línea contemporánea'), ('Línea marsala', 'Línea marsala'), ('Bazar premium', 'Bazar premium'), ('Complementos', 'Complementos'), ('Más productos', 'Más productos')], default='Más productos', max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='ProductoParaReceta',
            fields=[
                ('producto', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='api.producto')),
            ],
        ),
        migrations.CreateModel(
            name='Receta',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=50)),
                ('comensales', models.CharField(max_length=3)),
                ('duracion', models.CharField(max_length=15)),
                ('ingredientes', tinymce.models.HTMLField()),
                ('preparacion', tinymce.models.HTMLField()),
                ('imagen', models.ImageField(blank=True, null=True, upload_to='Recetas')),
                ('productoutilizado1', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='productoutilizado1', to='api.productoparareceta')),
                ('productoutilizado2', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='productoutilizado2', to='api.productoparareceta')),
                ('productoutilizado3', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='productoutilizado3', to='api.productoparareceta')),
            ],
        ),
    ]
