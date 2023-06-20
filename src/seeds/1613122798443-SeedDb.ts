import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1613122798443 implements MigrationInterface {
  name = 'SeedDb1613122798443';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs');`,
    );

    await queryRunner.query(
      //password: password
      `INSERT INTO users (username, email, password) VALUES ('Alexandrina', 'alexandrina@gmail.com', '$2b$10$.FXAkrj7OQwDscZzVnQhOOAzF48aZNDkRfwIFeqsSQL.37QeFYaT6');`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'First article description', 'First article body', 'coffee,dragons', 1),
      ('second-article', 'Second article', 'Second article description', 'Second article body', 'nestjs', 1);`,
    );
  }

  public async down(): Promise<void> {}
}
