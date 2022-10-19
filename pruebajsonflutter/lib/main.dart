import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

Future<Vacantes> fetchVacantes() async {
  final response =
      await http.get(Uri.parse('http://localhost:3000/api/vacantes'));

  if (response.statusCode == 200) {
    // If the server did return a 200 OK response,
    // then parse the JSON.
    return Vacantes.fromJson(jsonDecode(response.body));
  } else {
    // If the server did not return a 200 OK response,
    // then throw an exception.
    throw Exception('Sin contenido');
  }
}

class Vacantes {
  final int id;
  final String titulo;
  final String descricion;
  final int telefono;

  const Vacantes(
      {required this.id,
      required this.titulo,
      required this.descricion,
      required this.telefono});

  factory Vacantes.fromJson(Map<String, dynamic> json) {
    return Vacantes(
        id: json['id'],
        titulo: json['titulo'],
        descricion: json['descricion'],
        telefono: json['telefono']);
  }
}

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  late Future<Vacantes> futureVacantes;

  @override
  void initState() {
    super.initState();
    futureVacantes = fetchVacantes();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Fetch Data Example',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: const Text('JAH'),
        ),
        body: Center(
          child: FutureBuilder<Vacantes>(
            future: futureVacantes,
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                return Text('hola');
              } else if (snapshot.hasError) {
                return Text('${snapshot.error}');
              }

              // By default, show a loading spinner.
              return const CircularProgressIndicator();
            },
          ),
        ),
      ),
    );
  }
}
