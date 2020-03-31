using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class SeedEvents : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Events",
                columns: new[] { "Id", "Category", "Date", "Description", "Place", "Title" },
                values: new object[] { new Guid("6d900b32-7508-48e5-87bb-7718108c5a2d"), "wedding", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Descr", "Warsaw", "Test 1" });

            migrationBuilder.InsertData(
                table: "Events",
                columns: new[] { "Id", "Category", "Date", "Description", "Place", "Title" },
                values: new object[] { new Guid("78b5cc77-92b1-48dd-8511-1b61afebda2e"), "wedding", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Descr2", "Poznan", "Test 2" });

            migrationBuilder.InsertData(
                table: "Events",
                columns: new[] { "Id", "Category", "Date", "Description", "Place", "Title" },
                values: new object[] { new Guid("97569d77-86a6-4ecc-b605-33657a749de5"), "wedding", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Descr3", "Lublin", "Test 3" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "Id",
                keyValue: new Guid("6d900b32-7508-48e5-87bb-7718108c5a2d"));

            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "Id",
                keyValue: new Guid("78b5cc77-92b1-48dd-8511-1b61afebda2e"));

            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "Id",
                keyValue: new Guid("97569d77-86a6-4ecc-b605-33657a749de5"));
        }
    }
}
